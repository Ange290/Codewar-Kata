const finalGrade = (exam: any, projects: any) => {
   if (exam < 0 || exam > 100) {
        return "Invalid exam grade. It must be between 0 and 100.";
    }
    if (projects < 0) {
        return "Invalid number of projects. It cannot be negative.";
    }
};