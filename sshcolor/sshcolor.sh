#!/bin/sh

# alias ssh="~/sshcmacOsshcolorolor/sshcolor.sh"

#this is the Terminal profile name to use after returning from the ssh call
LOCAL="local"

osascript -l JavaScript ~/macOsshcolor/sshcolor.js $@  > /dev/null

/usr/bin/ssh "$@"

osascript -l JavaScript  ~/macOsshcolor/sshcolor.js $LOCAL > /dev/null
