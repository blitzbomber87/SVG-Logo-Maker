// SVG file generator that usues file system and prompt answers to genereate a logo.svg
const fs = require('fs');

class SVGGenerator {
    constructor(text, textColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
    }

    generateSVG() {
        const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        fs.writeFileSync('examples/logo.svg', svgContent.trim());
        console.log('Generated logo.svg');
    }
}

module.exports = SVGGenerator;