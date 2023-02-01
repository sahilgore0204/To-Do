export default function ConvertLocaleDateToStringDate(localDate){
    let cleanDate="";
    let n=localDate.length;
    for(let i=0;i<n;i++){
        if(localDate[i]!==",")
        cleanDate+=localDate[i];
    }
    let dateArray=cleanDate.split(" ");
    const Month={
        "January":"01",
        "February":"02",
        "March":"03",
        "April":"04",
        "May":"05",
        "June":"06",
        "July":"07",
        "August":"08",
        "September":"09",
        "October":"10",
        "November":"11",
        "December":"12"
    };
    let stringDate=Month[dateArray[1]]+"/"+dateArray[2]+"/"+dateArray[3];
    return stringDate;
}