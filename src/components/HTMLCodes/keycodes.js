const keys = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause/break',
    20: 'caps lock',
    27: 'escape',
    32: 'space',
    33: 'page up',
    34: 'page down',
    35: 'end',
    36: 'home',
    37: 'left arrow',
    38: 'up arrow',
    39: 'right arrow',
    40: 'down arrow',
    45: 'insert',
    46: 'delete',
    91: 'left window key',
    92: 'right window key',
    93: 'select key',
    106: 'numpad *',
    107: 'numpad +',
    109: 'numpad -',
    110: 'numpad .',
    111: 'numpad /',
    144: 'num lock',
    145: 'scroll lock',
    182: 'my computer',
    183: 'my calculator',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\''
};

const keyIcons = {
    37: 'arrow_back',
    38: 'arrow_upward',
    39: 'arrow_forward',
    40: 'arrow_downward',
};

var i = 0;

for(i = 48; i < 58; i++) {
    keys[i] = i-48;
}

for(i = 65; i < 91; i++) {
    keys[i] = String.fromCharCode(i+32);
}

for (i = 112; i < 124; i++) {
    keys[i] = `f${i - 111}`;
}

for (i = 96; i < 106; i++) {
    keys[i] = `numpad ${i-96}`;
}

export default function getKeyCode(e) {
    var key;
    if(e) {
        var keyCode = e.which || e.keyCode || e.charCode;
        if(keyCode) key = keyCode;
    }

    return {
        key: keys[key],
        which: e.which,
        keyCode: e.keyCode,
        shiftKey: e.shiftKey.toString(),
        altKey: e.altKey.toString(),
        ctrlKey: e.ctrlKey.toString(),
        metaKey: e.metaKey.toString()
    };
}

export function getKeyIcon(e) {
    var key;
    if(e) {
        var keyCode = e.which || e.keyCode || e.charCode;
        if(keyCode) key = keyCode;
    }
    return keyIcons[key];
}