#!/bin/bash

# Check if an argument is provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 <folder_path> <filename.jsx>"
    exit 1
fi

folder_path="$1"
filename="$2"
full_path="${folder_path}/${filename}"

# Check if the folder exists, if not, create it
if [ ! -d "$folder_path" ]; then
    echo "Folder $folder_path does not exist. Creating it..."
    mkdir -p "$folder_path"
fi

# Check if the file already exists
if [ -f "$full_path" ]; then
    echo "File $full_path already exists."
    exit 1
fi

# Create a new JSX file
touch "$full_path"

# Write content to the JSX file
cat << EOF > "$full_path"
import React from 'react';

const ${filename%.jsx} = () => (
    <div>
        <h1>Hello, World!</h1>
    </div>
);

export default ${filename%.jsx};
EOF

# Open the newly created JSX file in a text editor (Visual Studio Code)
code "$full_path"

echo "File $filename created successfully at $folder_path"
