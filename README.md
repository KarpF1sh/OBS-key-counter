# OBS-key-counter
Key press counter for rhythm games to use with OBS.

## Better readme coming

# Windows:
Before running:
1. Install node.js first!
    Install this older version of node (IoHook module needs older module version 83)
    https://nodejs.org/download/release/v14.18.3/node-v14.18.3-x64.msi
    - Check the "install chocolatey" chekbox during install
    - Reboot your computer before continuing to step 2!

2. Set up the project
    - Open "setup-project.bat" file from this directory
    - Let it run

3. Add to OBS
    - Open OBS 
    - In the sources category click the "plus" icon
    - Click "browser"
    - In the URL field type: "localhost:8000" without quotes
    - Click OK


Running:
1. Run the batch file
    - After everything's set up you can run the start.bat file
    - It will open a commnd window
    - The app will count your keypresses as long as that window is running

2. Stopping
    - Just close the command window


Configuring keys:
    You can set up your keybinds in keys.txt
    These are the keys that will cause the counter to change
    The default keys are "weopzx,."

    To change the keys you can use the keys.txt file as an example.
    Put each key on a new line.

    If you wan't to use non-letter keys ie. "." use the characters literal name instead, 
    like this: "period".
    IT WILL NOT WORK IF YOU USE THE CHARACTER ONLY

Configuring images:
    In this projects fodler open the views folder.
    Within that folder there will be another folder named images
    There are two files, "finish.jpg" and "tmp.jpg"

    finish.jpg is the image that's shown when the counter reaches 0
    the tmp.jpg image is shown as a placeholder

    You can change these files, but you have to use the same filenames and filetypes!  
