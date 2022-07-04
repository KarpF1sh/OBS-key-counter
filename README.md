# OBS-key-counter
Key press counter for rhythm games to use with OBS.

## Before running:

Install a older version of node
**(IoHook needs older module version (83))**
https://nodejs.org/download/release/v14.18.3/node-v14.18.3-x64.msi

### Setting up:

Run `npm i` in the source directory or run the "setupt-project" batchfile to install the required dependencies

### Running:

Run `npm start` or open the "start" batch file

### Running:

- Open OBS 
- Click the plus icon in the sources tab
- Click "browser"
- In the URL field type: `localhost:8000`
- Click OK

## Configuration:

### Configuring keys:
### **This feature is not well tested nor implemented!** ###  
You can set up your keybinds in the `keys.txt`-file  
The default keys are "weopzx,."  

Use the keys.txt file as an example.  
Put each key on a new line.  

If you wan't to use non-letter keys ie. "." use the characters literal name instead, 
like this: "period".  
**IT WILL NOT WORK IF YOU USE THE RAW CHARACTER**  

### Configuring images:
### **This feature too is not well tested nor implemented!** ###
Within that folder there will be another folder named images  
There are two files, `finish.jpg` and `tmp.jpg`  

finish.jpg is the image that's shown when the counter reaches 0  
the tmp.jpg image is shown as a placeholder  

You can change these files, but you have to use the same filenames and filetypes!  
