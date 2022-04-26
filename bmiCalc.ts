interface BmiValues {
    value1: number
    value2: number
}

const parseArgs = (args: Array<string>): BmiValues => {
    if (args.length > 4) throw new Error('not enough args')
    if (args.length < 4) throw new Error('not many args')

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    } else {
        throw new Error('Provided values are not valid numbers')
    }
}

const bmiCalculator = (a: number, b: number) => {
    let bmi = (a / ((b * b) / 10000))
    if (bmi < 18.6) {
        console.log(`Under Weight : ${bmi}`);
    } else if (bmi >= 18.6 && bmi < 24.9) {
        console.log(`normal weight ${bmi}`);
    } else {
        console.log(`over weight ${bmi}`);
    }
}

try {
    const { value1, value2 } = parseArgs(process.argv)
    bmiCalculator(value1, value2)
} catch (error: unknown) {
    let errorMessage = 'somthing goes wrong'
    if (error instanceof Error) {
        errorMessage += ' Error : ' + error.message
    }
    console.log(errorMessage);

}