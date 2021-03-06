// Setup canvas in proportion to the window.
const const_canvas = document.getElementById("const_canvas");
const const_ctx = const_canvas.getContext('2d');

const lobby_canvas = document.getElementById("lobby_canvas");
const lobby_ctx = lobby_canvas.getContext("2d");

const int_canvas = document.getElementById("int_canvas");
const int_ctx = int_canvas.getContext("2d");

const win_canvas = document.getElementById("win_canvas");
const win_ctx = win_canvas.getContext("2d");

const winWidth  = window.innerWidth;
const winHeight = window.innerHeight;

// Setting up canvas dimensions.
const_canvas.width  = winWidth;
const_canvas.height = winHeight;

lobby_canvas.width  = winWidth;
lobby_canvas.height = winHeight;

int_canvas.width  = winWidth;
int_canvas.height = winHeight;

win_canvas.width  = winWidth;
win_canvas.height = winHeight;

export {winWidth, winHeight, const_ctx, int_ctx, 
        const_canvas, int_canvas, win_canvas, win_ctx, lobby_canvas, lobby_ctx};