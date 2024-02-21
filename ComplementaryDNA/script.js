const DNA = dna => {
    let res = '';
    for(let i = 0; i < dna.length; i++) {
        switch(dna[i]) {
            case 'A':
                res += 'T';
                break;
            case 'T':
                res += 'A';
                break;
            case 'C':
                res += 'G';
                break;
            case 'G':
                res += 'C';
        }
    }
    return res;
}
const result = DNA('ATTGC')
const result1 = DNA('GTAT')
console.log(result);
console.log(result1);