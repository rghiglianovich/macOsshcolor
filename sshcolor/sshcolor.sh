#!/bin/sh




# alias ssh="~/sshcolor/sshcolor.sh"



LOCAL="mac1"

osascript -l JavaScript ~/sshcolor/sshcolor.scpt $@  > /dev/null

/usr/bin/ssh "$@"

# Change the color of the terminal back to what it was before
osascript -l JavaScript  ~/sshcolor/sshcolor.scpt $LOCAL > /dev/null
