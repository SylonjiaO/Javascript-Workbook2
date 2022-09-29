let majorCode = "BIOL";
let nameOfMajor;
let departmentOffice; 

switch (majorCode) {
    case "BIOL":
        nameOfMajor = "Biology";
        departmentOffice = "Science Bldg, Room 310";
        break;
        case "CSCI" :
            nameOfMajor = "Computer Science";
            departmentOffice = "Sheppard Hall,Room 314";
            break;
            case "ENG":
                nameOfMajor = "English";
                departmentOffice = "Kerr Hall, Room 201";
                break;
                case "HIST":
                    nameOfMajor = "History";
                    departmentOffice = "Kerr Hall, Room 114";
                    break;
                    case "MKT":
                        nameOfMajor = "Marketing";
                        departmentOffice = "Westly Hall, Room 310";
                        break;

    default:
        nameOfMajor = "";
        departmentOffice = "";
        break;
}