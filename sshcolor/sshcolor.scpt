
var args = $.NSProcessInfo.processInfo.arguments 
var par=ObjC.unwrap(args.objectAtIndex(args.count -1))
    aa=par.split("@")
    var nome;
    
    nome =aa[aa.length -1]
    nome = nome.split('.')[0]
     
 hostBackup="Ocean"
 try {
 
  a=Application("Terminal").windows[0].currentSettings = Application("Terminal").settingsSets[nome]

} catch( e) {

  a=Application("Terminal").windows[0].currentSettings = Application("Terminal").settingsSets[hostBackup]

}
