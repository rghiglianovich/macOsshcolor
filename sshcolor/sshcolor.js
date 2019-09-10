ObjC.import('stdlib');

var app = Application.currentApplication();
app.includeStandardAdditions = true;

var args = $.NSProcessInfo.processInfo.arguments;

// server  should be always the last parameter
var serverName = ObjC.unwrap(args.objectAtIndex(args.count - 1));

// remove the user@ , if any
part = serverName.split("@");
var nome = part[part.length - 1];

//remove the domain name, if present
nome = nome.split('.')[0];

var relations = loadNames();

if (typeof relations[nome] != 'undefined')
    nome = relations[nome];
try {
    
    Application("Terminal").windows[0].currentSettings = Application("Terminal").settingsSets[nome]
    
} catch (e) {
    
    // this is the Terminal Profile to use if no specific one is present
    remotegeneric = "remote";
    Application("Terminal").windows[0].currentSettings = Application("Terminal").settingsSets[remotegeneric]
    
}


function loadNames()
{
    
    var myPath = $.getenv('APP_PATH');
    var fname = myPath + 'sshcolorNames.json';
    try {
        var f = app.read(Path(fname))
        var lista = JSON.parse(f);
        return lista;
    } catch (e) {

        return {}
    }
}