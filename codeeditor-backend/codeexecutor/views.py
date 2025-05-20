from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
import json
import subprocess
import tempfile
import os

@csrf_exempt
def run_code(request):
    print(f"Request method: {request.method}")
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            code = data.get('code', '')
            user_input = data.get('input', '')

            # Create temporary Python file
            with tempfile.NamedTemporaryFile(mode='w+', suffix='.py', delete=False) as temp_code_file:
                temp_code_file.write(code)
                temp_code_file_path = temp_code_file.name

            # Run Docker container
            docker_command = [
                'docker', 'run', '--rm',
                '-v', f'{temp_code_file_path}:/app/script.py',
                'code-runner',
                '/app/run_code.sh', '/app/script.py', user_input
            ]

            process = subprocess.Popen(
                docker_command,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )

            stdout, stderr = process.communicate()

            # Delete temp file
            os.remove(temp_code_file_path)

            return JsonResponse({
                'output': stdout,
                'error': stderr
            })

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    else:
        return JsonResponse({'error': 'POST request required'}, status=405)

    return JsonResponse({'error': 'POST request required'}, status=405)

@csrf_exempt
def home(request):
    return render(request, 'index.html')