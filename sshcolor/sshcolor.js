
var args = $.NSProcessInfo.processInfo.arguments

// server  should be always the last parameter
var par=ObjC.unwrap(args.objectAtIndex(args.count -1));

// remove the user@ , if any
aa=par.split("@")
var nome  =aa[aa.length -1]

//remove the domain name, if present
nome = nome.split('.')[0]

// this is the Terminal Profile to use if no specific one is present
remotegeneric="remote"
try {
    
    Application("Terminal").windows[0].currentSettings = Application("Terminal").settingsSets[nome]
    
} catch( e) {
    
    Application("Terminal").windows[0].currentSettings = Application("Terminal").settingsSets[remotegeneric]
    
}
