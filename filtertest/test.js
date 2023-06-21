const companies = [
    {name: 'valgee', category: 'retail', start: 1998, end: 2020},
    {name: 'col', category: 'wholesale', start: 1999, end: 2021},
    {name: 'valee', category: 'retail', start: 1980, end: 1999},
    {name: 'wind', category: 'wholesale', start: 1950, end: 2023},
    {name: 'grater', category: 'retail', start: 1899, end: 2018},
    {name: 'valee', category: 'retail', start: 1999, end: 1995},
    {name: 'wind', category: 'wholesale', start: 1995, end: 2002},
    {name: 'grater', category: 'retail', start: 1990, end: 2006},
]

const ages = [32, 5, 10 , 20, 33, 45, 50, 100, 25, 22, 12, 98, 35, 68]

// const retailCompanies = companies.filter(company => company.category === 'retail')

// console.log(retailCompanies);

// const eightyCompanies = companies.filter(company => (company.start >= 1980 && company .start <= 1990))

// console.log(eightyCompanies);
// const lastedTenCompanies = companies.filter(company => (company.end - company.start > 10))

// console.log(lastedTenCompanies);

// const companyNames = companies.map((company) => {
//     return company.name
// })
// console.log(companyNames);

// const testMap = companies.map((company) => {
//     return `${company.name} [${company.start} - ${company.end}]`
// })
// console.log(testMap);

// const agesSquare = ages.map(age => Math.sqrt(age))
// console.log(agesSquare);
// const agesTimesTwo = ages.map(age => age * 2)
// console.log(agesTimesTwo);

// const agesMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2)
// console.log(agesMap);

// const sortedCompany = companies.sort((a,b) => (a.start > b.start ? 1 : -1)) 
// console.log(sortedCompany);

const sortedAges = ages.sort((a,b) => a-b)
console.log(sortedAges);