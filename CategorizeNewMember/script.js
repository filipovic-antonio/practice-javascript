const categorizeNewMember = members => {
    return members.map(([age, handicap]) => {
        return age >= 55 && handicap > 7 ? 'Senior' : 'Open';
    });
}
const result = categorizeNewMember([[68,2], [34,-6],[55, 8]]);
console.log(result);