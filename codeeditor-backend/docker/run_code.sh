#!/bin/bash

CODE_FILE=$1
INPUT=$2

timeout 5 python3 "$CODE_FILE" <<< "$INPUT"
