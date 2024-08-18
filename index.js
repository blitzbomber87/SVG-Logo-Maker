const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVGGenerator = require('./lib/svgGenerator');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => input.length <= 3 || 'Please enter up to three characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal):'
    }
];

// Run inquirer.prompt for questions then use the provided answers to generate SVG
inquirer
    .prompt(questions)
    .then(answers => {
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }
    shape.setColor(answers.shapeColor);

    const svgGenerator = new SVGGenerator(answers.text, answers.textColor, shape);
    svgGenerator.generateSVG();
});