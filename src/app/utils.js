export const getDepartMent = (value) => {
    switch (parseInt(value)) {
        case 1:
            return "Web Developement"
        case 2:
            return "Mobile Developement"
        case 3:
            return "Design"
        case 4:
            return "Testing"
        case 5:
            return "Degital Marketing"
        default:
            break;
    }
}