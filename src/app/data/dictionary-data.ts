import { iDictionary } from '../interfaces/dictionary-interface';

export const DICTIONARY: iDictionary[] = [
    {
        word: 'mathematics',
        description: `
            The are of using arithmatic logic and its symbols to solve problems.
        `,
        synonyms: ['maths'],
        example: ``
    },
    {
        word: 'addition',
        description: `
            A mathematical method or operaration of combining two or more
            numbers to get a total or result. A plus (+) operator is used
            with addition operations to represent the combination of the
            numbers.
        `,
        synonyms: ['add', 'add up', 'add in', 'plus'],
        example: `
            Example:
            Perform the following calculation, add 240 and 160\n

            -> 240 + 160\n
            => ${240 + 160}
        `
    },
    {
        word: 'subtraction',
        description: `
            A mathematical method or operation of removing a number from
            another number to get a remaining result. Subtraction is finding
            the difference between two numbers.
        `,
        synonyms: ['subtract', 'difference', 'take away', 'take from', 'minus'],
        example: `
            Example:
            Subtract 160 from 240

            -> 240 - 160
            => ${240 - 160}
        `
    },
    {
        word: 'bi',
        description: `
            A prefix or a stand alone word that denotes the value or quantity
            two.`,
        synonyms: ['two'],
        example: `
            Example:
            Other words that start with bi

            -> bicycle, bicoloured, biennial, bicentennial, bipnnate
        `
    },
    {
        word: 'common',
        description: 'This is a word used to describe a set of elements that share a finite number of properties.',
        synonyms: ['usual', 'also found in', 'ordinary', 'regular'],
        example: `
            Example:
            Find the common factors of 21 and 15.

            -> factors of 21: 1, 3, 7, 21
            -> factors of 15: 1, 3, 5, 15

            => 1 and 3
            Note: the common factors here will be numbers that in factors of 21 and 15.
        `
    },
    {
        word: 'capacity',
        description: `
            A measure of the maximum amount of contents that an object can
            hold or carry.
        `,
        synonyms: ['room', 'size', 'measurements'],
        example: `
            Example:
            A 2 litre bottle has 500ml of juice left. What is the capacity
            of the bottle.

            => 2 litres
        `
    },
    {
        word: 'cubic',
        description: `
            A number or unit that has been raised to the power or exponent of
            3 (three).
        `,
        synonyms: ['three'],
        example: `
            Example:
            Calculate the volume of a rectangular prism with the following
            dimensions, length = 6cm, width = 2cm and height = 5cm. Use
            appropriate units.

            -> vlm = L x W x H
            -> vlm = 6cm x 2cm x 5cm
            -> vlm = 6 x 2 x 5 x cm x cm x cm

            => 60cm3
            Note: When working with volume, the units of your answer should
            be raised to the power of 3 e.g. meters cubed, km cubed and so on.
        `
    },
    {
        word: 'cube',
        description: `
            A closed three-dimensional object made from 6 equal square face.
        `,
        synonyms: ['cuboid', 'block'],
        example: `
            Example:
            What is the name of a three-dimensional shape that has 6 faces that are squares?

            => cube
        `
    },
    {
        word: 'complete',
        description: `
            A word in mathematics questions that is normally used to ask the
            student to finish or add missing parts in a problem.
        `,
        synonyms: ['done', 'finished', 'ended', 'finalized'],
        example: `
            Example:
            Complete the following sequence,
            125; 150; _ _ _; _ _ _; 225

            => 175; 200
        `
    },
    {
        word: 'determine',
        description: `
            A word in mathematics questions that that is normally used to
            ask the student to find a solution to the of the problem or
            to verify a provided answer.
        `,
        synonyms: ['calculate', 'find', 'check', 'verify'],
        example: `
            Example 1:
            Determine the lines of symmetry that a square has.

            => 4</p
        `
    },
    {
        word: 'difference',
        description: 'A word that refers to subtracting two numbers to find the gap between them.',
        synonyms: [''],
        example: ``
    },
    {
        word: 'diagram',
        description: 'A symbolic representation of information using visual techniques.',
        synonyms: ['shape', 'visual aid', 'graph'],
        example: ``
    },
    {
        word: 'dimensions',
        description: `A measurement of the side of a shape.`,
        synonyms: ['measurements', 'length'],
        example: `
            Example:
            A rectangular shape has the dimensions of 1500mm x 1000mm. Use
            the dimensions to find the perimeter.

            The perimeter of a rectangle
            -> Perimeter = 2(L + W)
            -> Perimeter = 2(1500mm + 1000mm)

            => ${2 * (1500 + 1000)}mm
        `
    },
    {
        word: 'dotted line',
        description: `
            This is a broken line that is drawn to represent a line that is
            not a part of the shape or to represent missing or non-visible
            lines on a shape.
        `,
        synonyms: ['broken line', 'section line'],
        example: ``
    },
    {
        word: 'dice',
        description: `
            A small cube with at least one engraved dot on each face. The
            dots on each face are one or six numbers that range from 1 to 6
            e.g one face can have 1 dot, another, 4 dots and so on, but no
            face will have more that 6 dots and no number of dots is repeated.
        `,
        synonyms: [''],
        example: ``
    },
    {
        word: 'double',
        description: `
            Doubling a number is the same as making it twice as large. To double
            a number, add the number to itself or multiply it by 2.
        `,
        synonyms: ['twice', 'times two'],
        example: `
            Example:
            Find the difference between 20 and 15. Double the result you get.

            -> (20 - 15) x 2
            => ${(20 - 15) * 2}
        `
    },
    {
        word: 'expansion notation',
        description: `
            A mathematical technique of breaking up a number and rewriting it
            as a sum each digit in its place value.
        `,
        synonyms: ['expansion', 'break down', 'expand'],
        example: `
            Example 1:
            Write down the 2 345 in expansion notation.

            => 2000 + 300 + 40 + 5

            Example 2:
            Provide the expansion notation of 12,25.

            => 10 + 2 + 0,20 + 0,05
        `
    },
    {
        word: 'place value',
        description: `
            The value of digit which is determined by its positon in a number
            e.g. TTh, T or U.
        `,
        synonyms: ['positional value', 'value of a digit'],
        example: `
            Example:
            Provide the place value of 7 in the following number,
            275 300

            => TTh or Ten Thousands
        `
    },
    {
        word: 'multiplication',
        description: `
            A mathematical method or operation that results in repeated
            addition of a number for a specified number of time.
        `,
        synonyms: ['multiply', 'times', 'by'],
        example: `
            Example:
            Multiply the following numbers, 5 and 12

            -> 5 x 12
            => 60
        `
    },
    {
        word: 'division',
        description: `
            A mathematical method or operation that results in repeated
            subtraction of a number by a divisor until the divisor can\'t
            subtract anymore and the number is in its simplest form. A
            method to find out how many time a divisor goes into a number.
        `,
        synonyms: ['share', 'split', 'divide', 'distribute'],
        example: `
            Example:
            Divide 100 sweets equally among 10 children. Determine how many sweets each will get.

            -> 100 ÷ 10
            => 10 sweet for each child
        `
    },
    {
        word: 'multiple',
        description: `
            This is a number that is produced from the product of a number 
            and a factor.
        `,
        synonyms: [''],
        example: `
            Example:
            Provide the first 5 multiples of 7.

            -> 7 x 1 = 7
            -> 7 x 2 = 14
            -> 7 x 3 = 21
            -> 7 x 4 = 28
            -> 7 x 5 = 35

            => 1, 14, 21, 28 and 35 are the multiples in this case.
        `
    },
    {
        word: 'factor',
        description: `
            A number that goes or divides into another specified number a
            complete number of times without leaving a remainder.
        `,
        synonyms: [''],
        example: `
            Example:
            Find the factors of 60.

            -> 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60
            Note: A numbeer is always a factor of itself, in this case 60
            is a factor of 60.
        `
    },
    {
        word: 'two-dimensional',
        description: `
            A shape that has got one flat face, and can be drawn on a
            chart with 2 axes (x, y).
        `,
        synonyms: ['2D shape'],
        example: `
            Example:
            Provide a list of any 4 two-dimensional shapes.

            => triangle, square, pentagon, octagon just to name a few
        `
    },
    {
        word: 'three-dimensional',
        description: `
            A shape that has more than one face, has more that one view, 
            and can be drawn on a chart with 3 axes (x, y, z).
        `,
        synonyms: ['3D shape'],
        example: `
            Example:
            Provide a list of any 4 three-dimensional shapes.

            => cube, triangular prism, rectangular prism, pentagonal prism, octagonal prism, pyramid just to name a few.
        `
    },
    {
        word: 'rule',
        description: `
            This is like a machine that receives input, operates on that
            input and produces output or a method or tool that operates 
            on input to give you output.
        `,
        synonyms: ['function', 'method', 'tool'],
        example: `
            Example:
            Below is a short list that shows what some selected numbers have changed to. Find the rule.


            Input -- Output
            _25_ --> _15_
            _30_ --> _16_
            _35_ --> _17_

            => input ÷ 5 + 10
        `
    },
    {
        word: 'input',
        description: `
            The data or content that you put into a rule in order to get
            output.
        `,
        synonyms: [''],
        example: ``
    },
    {
        word: 'output',
        description: `
            The information or content that is produced by a rule after entering
            some input.
        `,
        synonyms: [''],
        example: ``
    },
    {
        word: 'area',
        description: `
            This is the space that is occupied by a flat shape or the surface
            of an object. The units of area should be measured in squares.
        `,
        synonyms: ['flat space occupied'],
        example: `
            Example:
            Calculate the area of a rectangle with a length of 10cm and 
            width of 5cm. Use appropriate units.

            -> Area = L x W
            -> Area = 10cm x 5cm
            -> Area = 10 x cm x 5 x cm
            -> Area = 10 x 5 x cm x cm
            -> Area = 50 x cm2

            => 50cm2
        `
    },
    {
        word: 'volume',
        description: `
            This is the space that is occupied by a 3-dimensional object.
            The units of measurement for volume should be in cubes.
        `,
        synonyms: ['space occupied', 'capacity'],
        example: `
            Example:
            Calculate the volume of a triangular prism with a base of 20cm,
            height of 10cm and length of 40cm. Use appropriate units.

            -> Volume = 1/2 x b x h x l
            -> Volume = 1/2 x 20cm x 10cm x 40cm
            -> Volume = 1/2 x 20 x cm x 10 x cm x 40 x cm
            -> Volume = 1/2 x 20 x 10 x 40 x cm x cm x cm
            -> Volume = 1/2 x 8 000 x cm3
            -> Volume = 4 000 x cm3

            => 4 000cm3
        `
    },
    {
        word: 'vertices',
        description: `
            A word used to describe the corners of a shape or the points on
            a shape where edges meet.
        `,
        synonyms: ['corners'],
        example: `
            Example:
            How many vertices does a pentagonal prism have?

            => 10 vertices
        `
    },
    {
        word: 'edges',
        description: `
            These are the straight lines that mark the sides of a shape.
        `,
        synonyms: ['sides', 'lines'],
        example: `
            Example:
            How many edges does a rectangular prism have?

            => 12 edges
        `
    },
    {
        word: 'faces',
        description: `
            These are the 2D shapes or the flat sides that you find on a
            three-dimensional shape.
        `,
        synonyms: ['surfaces'],
        example: `
            Example:
            How many faces does a triangular prism have?

            => 5 faces
            Note: The 5 faces are comprises of 2 triangles and 3 rectangles or 2 triangles and 3 squares. Go ahead and test this.
        `
    },
    {
        word: 'triangle',
        description: `
            A two-dimensional shape that has 3 sides and 3 angles.
        `,
        synonyms: ['equilateral triangle', ' iscosceles triangle', ' scalene triangle'],
        example: `
            Example:
            How many sides and angles does a triangle have?

            => 3 sides and 3 angles
        `
    },
    {
        word: 'quadrilateral',
        description: `
            This is a category of two-dimensional shapes that have 4 sides
            and 4 angles.
        `,
        synonyms: ['four sided shape'],
        example: `
            Example:
            Name any 3 quadrilaterals.

            => rhombus
            => parallelogram
            => trapezium
            => square
            => rectangle
            => kite
            pick any 3.
        `
    },
    {
        word: 'hcf',
        description: `
            The Highest Common Factor is a factor used when you are trying
            to simplify (bring down a fraction to its simplest form or bring
            down a fraction down to one that does not have a common factor) 
            a fraction.

        `,
        synonyms: ['Highest Common Factor', 'greatest factor'],
        example: `
            Example:
            **/ Find the Highest Common Factor of 12 and 16.

            **/ Factors
            **/ -> 12: 1, 2, 4, 6, 12
            **/ -> 16: 1, 2, 4, 8, 16
            **/ Common
            **/ -> 12: 1, 2, 4
            **/ -> 16: 1, 2, 4
            **/ Highest
            **/ -> 12: 4
            **/ -> 16: 4

            **/ => 4 is the HCF
        `
    },
    {
        word: 'product',
        description: `
            This is a resultant that you get from a multiplication process.
            Therefore, to get a product, you need to do some form of 
            multiplication first.
        `,
        synonyms: ['multiplication', 'times'],
        example: `
            Example:
            Find the product of 15,5 and 2,5

            -> 15,5 x 2,5
            => ${15.5 * 2.5}
        `
    },
    {
        word: 'survey',
        description: `
            This is a method of collecting data from people by letting them
            answer a set of questions or a questionnaire.
        `,
        synonyms: ['questionnaire'],
        example: ``
    },
    {
        word: 'questionnaire',
        description: `
            This is a form that questions on a particular subjects. It is
            given to a selected group of people who will answer the questions.
        `,
        synonyms: ['form'],
        example: ``
    },
    {
        word: 'set',
        description: `
            This is a collection or group of related objects.
        `,
        synonyms: ['data set', 'collection', 'group'],
        example: `
            Example:
            The following list of numbers can be considered as a data set.

            => 10; 20; 10; 15; 30; 10; 25
        `
    },
    {
        word: 'collect',
        description: `
            This is a way of putting together a group of items. It can also
            be a specialised or random grouping.
        `,
        synonyms: ['gather', 'put together', 'fetch'],
        example: `
            Example:
            The farmer went into his orchard and picked 10 mangoes,
            20 oranges and 15 guavas. How many fruits did the farmer
            collect in the orchard?

            -> 10 + 20 + 15
            => ${10 + 20 + 15} fruits collected
        `
    },
    {
        word: 'frequency',
        description: `
            This is a number that represents how many times a particular
            object appears in a selected group of items or a data set.
        `,
        synonyms: ['occurrence, recurrence', 'regularity'],
        example: `
            Example:
            In the following data set of numbers, what is the frequency
            of 7?
            5, 6, 7, 3, 3, 5, 7, 7, 8, 7, 2, 10

            => 4
            Note: 7 appears 4 times in the list of numbers provided above.
        `
    },
    {
        word: 'mode',
        description: `
            This is an object that appears the most or has the highest
            frequency in a selected group of items or a data set.
        `,
        synonyms: ['most'],
        example: `
            Example:
            Look at the following data set of numbers, what is the mode?
            5, 6, 7, 3, 3, 5, 7, 7, 8, 7, 2, 10

            => 7
            Note: In the list of numbers above, 7 appears the most compared
            to all the other numbers or we can say, 7 has the highest frequency.
        `
    },
    {
        word: 'median',
        description: `
            This is the object that appears in the middle of an ordered or
            sorted group of objects or data set.
        `,
        synonyms: ['middle'],
        example: ``
    },
    {
        word: 'mass',
        description: `
            This is the ammount of matter that is found in an physical object.
        `,
        synonyms: ['weight', 'how heavy'],
        example: `
            Example:
            A courier has 10 parcels and each parcel has a weight of 5kg.
            What is the total mass of the parcels the courier is transporting?

            -> 5kg x 10
            => 50kg
            Note: the units of mass are -: grams(g), kilograms(kg), tonnes(t) just to name a few.
        `
    },
    {
        word: 'temperature',
        description: `
            A measurement of the degree of how hot and how cold it is, units
            are mainly in degrees celcius or Ferenheit.
        `,
        synonyms: [''],
        example: `
            Example:
            During the morning weather forcast, the temperature was 16 degrees celcius.
            In the afternoon, temperature will rise by 8 degrees celcius. How warm will it be in the afternoon?

            -> 16°c + 8°c
            => ${16 + 8}°c
        `
    },
    {
        word: 'thermometer',
        description: `
            This is the tool or instrument that is used to measure temperature.
        `,
        synonyms: [''],
        example: `
            Example:
            A school student is asked by the teacher to get the readings on a thermometer. The student
            came back with -2°c reading. It it extremely hot or extremely cold? Explain in your own words.

            => extremely cold

            Note: 0°c is already the freezing temperature. If the temparature is any further down,
            it becomes very harmful.
        `
    },
    {
        word: 'distance',
        description: `
            A measurement to describe the space that exists between 2 or
            more physical points.
        `,
        synonyms: ['lenght'],
        example: `
            Example:
            The bike messenger cycled 25km to a clients house and the same
            distance back. What is  the total length that the messenger
            cycled?

            -> 25km x 2
            => 50km that the messenger
        `
    },
    {
        word: 'time',
        description: `
            These are fractions that are used to explain a point between
            past, present and the future.
        `,
        synonyms: [],
        example: ``
    },
    {
        word: 'data',
        description: `
            These are raw facts that are unprocessed. These facts are often
            fetched directly like a survey, research results or instrument
            readings.
        `,
        synonyms: ['raw facts'],
        example: ``
    },
    {
        word: 'information',
        description: `
            This is processed data. Information is the content that you can
            read and easily comprehend.
        `,
        synonyms: [],
        example: ``
    },
    {
        word: 'perimeter',
        description: `
            This is the distance found right around the shape.
        `,
        synonyms: ['boundary', 'circumference'],
        example: `
            Example:
            Calculate the perimeter of a square that has one side which
            measures 15cm.


            A square is a quadrilateral with all 4 sides equal.
            -> 15cm + 15cm + 15cm + 15cm
            -> 15cm x 4

            => 60cm
        `
    },
    {
        word: 'drifting',
        description: `
            A form of transformation that involves both turning and sliding.
        `,
        synonyms: [''],
        example: ``
    },
    {
        word: 'prime number',
        description: `
            A whole number that only has two factor, 1 and itself.
        `,
        synonyms: ['prime'],
        example: `
            Example:
            Look at the following list of numbers and select the prime:
            2; 5; 12; 13; 18; 21; 27; 29

            => 2; 5; 13; 29
            Note: 2 is the only number that is both even and prime.
        `
    },
    {
        word: 'even',
        description: `
            This is a number that if divided by two it won\'t leave a
            remainder.
        `,
        synonyms: ['prime'],
        example: `
            Example:
            Look at the following list of numbers and select the even
            numbers:
            2; 5; 12; 13; 18; 21; 27; 29

            => 2; 12; 18
            Note: 2 is the only number that is both even and prime.
        `
    },
    {
        word: 'odd',
        description: `
            This is a number that if divided by two it will leave a
            remainder.
        `,
        synonyms: ['prime'],
        example: `
            Example:
            Look at the following list of numbers and select:
            2; 5; 12; 13; 18; 21; 27; 29

            => 2; 5; 13; 29
            Note: Some of the .
        `
    },
    {
        word: 'algebraic expression',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'sequence',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'number pattern',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'geometric pattern',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'variable',
        description: `

        `,
        synonyms: ['variables', 'place holder'],
        example: `

        `
    },
    {
        word: 'simplify',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'evaluate',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'coefficient',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'associative',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'commutative',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'constant',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'term',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'ommit',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'inflation',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'repeated factor',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'exponents',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'base',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'index',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'analyse',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'slope',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'graph',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'variable',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'place holder',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'ordered pair',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'coordinate pair',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'gradient',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'derivative',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    },
    {
        word: 'power',
        description: `

        `,
        synonyms: [''],
        example: `

        `
    }
];
