const finalGrade = (exam: any, projects: any) => {
   if (exam < 0 || exam > 100) {
        return "Invalid exam grade. It must be between 0 and 100.";
    }
    if (projects < 0) {
        return "Invalid number of projects. It cannot be negative.";
    }
    let result: number | string;
    if (exam > 90 || projects > 10) {
        result = 100;
    } else if (exam > 75 && projects >= 5) {
        result = 90;
    } else if (exam > 50 && projects >= 2) {
        result = 75;
    } else {
        result = 0;
    }
    return result;
};