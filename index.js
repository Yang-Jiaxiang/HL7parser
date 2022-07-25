const parser = require("@rimiti/hl7-object-parser");
const s12Mapping = require("./s12.json");

const s12 = `MSH|^~\&|OM_RAD_OF|IHE|DCM4CHEE|CYLIEN|20220523170000||ORM^O01^ORM_O01|20220623140000|P|2.3.1||||||8859/1\r`;
//SCH||49849903800^DimSolution||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rRGS|1\rAIG|1|||10101041431@750057689\rNTE|||My comment
const obj = parser.decode(s12, s12Mapping);
console.log(obj);