class Layout {
    constructor(id, name, background, slots) {
        this.id = id;
        this.name = name;
        this.background = background;
        this.slots = slots;
    }
}

class LayoutSlot {
    constructor(
        id,
        x, y, zOrder,
        width, height,
        mirrorHorizontally, mirrorVertically,
        gravity
    ) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.zOrder = zOrder;
        this.width = width;
        this.height = height;
        this.mirrorVertically = mirrorVertically;
        this.mirrorHorizontally = mirrorHorizontally;
        this.gravity = gravity;
    }
}