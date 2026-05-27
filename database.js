// ===== CEC VOTER DATABASE =====
// Edit this file to add/change persons.
// REAL entries (with photos) are marked real: true
// FAKE neighbours share the same address and surname as a real person — no photo needed
//
// Fields:
//   id          - personal ID (string, 11 digits)
//   lastName    - surname used for search matching
//   firstName   - first name to display
//   surname     - surname to display (same as lastName normally)
//   birth       - DD.MM.YYYY
//   station     - polling station code, e.g. "04.03"
//   stationType - "ელექტრონული" | "ქაღალდი"
//   mapUrl      - Google Maps link
//   address     - registered address (must match exactly for household lookup)
//   photo       - photo filename (leave "" for fake entries)
//   real        - true = searchable real person | false = neighbour filler only

const DATA = [

    // ──────────────────── REAL PERSONS ────────────────────

    {
        id: "01955003022", real: true,
        lastName: "თინიკაშვილი", firstName: "ლუკა", surname: "თინიკაშვილი",
        birth: "16.01.2005", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 7ა, ბინა 18",
        photo: "tinka.jpg"
    },
    {
        id: "43650000388", real: true,
        lastName: "ხუციშვილი", firstName: "ნიკოლოზ", surname: "ხუციშვილი",
        birth: "13.12.2006", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: "xuco.jpg"
    },
    {
        id: "01355005230", real: true,
        lastName: "არდაზიშვილი", firstName: "ალექსანდრე", surname: "არდაზიშვილი",
        birth: "17.08.2004", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 27",
        photo: "ardaza.jpg"
    },
    {
        id: "01752005600", real: true,
        lastName: "თურმანიძე", firstName: "ლაშა", surname: "თურმანიძე",
        birth: "15.09.2003", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, 11 მიკრო, 2 კვარტალი, კორპუსი 31, ბინა 13",
        photo: "buto.jpg"
    },
    {
        id: "01354003762", real: true,
        lastName: "ბეთხოშვილი", firstName: "ნუცა", surname: "ბეთხოშვილი",
        birth: "02.02.2007", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 9, ბინა 4",
        photo: "nuca.jpg"
    },
    {
        id: "01317065103", real: true,
        lastName: "ზაზაძე", firstName: "ნიკოლოზი", surname: "ზაზაძე",
        birth: "28.11.2002", station: "04.03", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: "Zazadz.jpg"
    },
    {
        id: "05301013673", real: true,
        lastName: "გვარამაძე", firstName: "ნიკოლოზი", surname: "გვარამაძე",
        birth: "17.06.2002", station: "05.12", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: "Gvarama.jpg"
    },
    {
        id: "05501013127", real: true,
        lastName: "ხარატიშვილი", firstName: "ამირანი", surname: "ხარატიშვილი",
        birth: "07.02.2002", station: "05.14", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: "1.jpg"
    },
    {
        id: "01708069303", real: true,
        lastName: "კორკოტაშვილი", firstName: "ნიკოლოზ", surname: "კორკოტაშვილი",
        birth: "05.04.2003", station: "07.22", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ზაქარია ფალიაშვილის ქ. N 33ა ბ. 15",
        photo: "2.jpg"
    },
    {
        id: "01808066522", real: true,
        lastName: "დემეტრაძე", firstName: "ზურა", surname: "დემეტრაძე",
        birth: "05.04.2003", station: "08.05", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: "3.jpg"
    },

    // ──────────────────── FAKE NEIGHBOURS ────────────────────
    // Each real person gets 2-4 fake housemates sharing their address.
    // One housemate always shares the same surname as the real person.

    // >> neighbours of თინიკაშვილი (კორპუსი 7ა, ბინა 18)
    {
        id: "01955003100", real: false,
        lastName: "თინიკაშვილი", firstName: "მარიამ", surname: "თინიკაშვილი",
        birth: "03.07.1978", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 7ა, ბინა 18",
        photo: ""
    },
    {
        id: "01955003101", real: false,
        lastName: "თინიკაშვილი", firstName: "გიორგი", surname: "თინიკაშვილი",
        birth: "14.11.1975", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 7ა, ბინა 18",
        photo: ""
    },
    {
        id: "01955003102", real: false,
        lastName: "კვირიკაშვილი", firstName: "ანა", surname: "კვირიკაშვილი",
        birth: "22.04.2001", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 7ა, ბინა 18",
        photo: ""
    },

    // >> neighbours of ხუციშვილი (კორპუსი 5, ბინა 11)
    {
        id: "43650000400", real: false,
        lastName: "ხუციშვილი", firstName: "თამარ", surname: "ხუციშვილი",
        birth: "09.03.1980", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: ""
    },
    {
        id: "43650000401", real: false,
        lastName: "ხუციშვილი", firstName: "ვახტანგ", surname: "ხუციშვილი",
        birth: "17.06.1977", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: ""
    },
    {
        id: "43650000402", real: false,
        lastName: "მელიქიძე", firstName: "სოფო", surname: "მელიქიძე",
        birth: "30.12.2003", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: ""
    },
    {
        id: "43650000403", real: false,
        lastName: "მელიქიძე", firstName: "დავით", surname: "მელიქიძე",
        birth: "05.08.1948", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: ""
    },

    // >> neighbours of არდაზიშვილი (კორპუსი 5, ბინა 27)
    {
        id: "01355005300", real: false,
        lastName: "არდაზიშვილი", firstName: "ნინო", surname: "არდაზიშვილი",
        birth: "11.02.1979", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 27",
        photo: ""
    },
    {
        id: "01355005301", real: false,
        lastName: "არდაზიშვილი", firstName: "ზაზა", surname: "არდაზიშვილი",
        birth: "28.09.1974", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 27",
        photo: ""
    },
    {
        id: "01355005302", real: false,
        lastName: "ჯიქია", firstName: "ეკა", surname: "ჯიქია",
        birth: "15.07.2000", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 27",
        photo: ""
    },

    // >> neighbours of თურმანიძე (კორპუსი 31, ბინა 13)
    {
        id: "01752005700", real: false,
        lastName: "თურმანიძე", firstName: "ეთერ", surname: "თურმანიძე",
        birth: "07.05.1982", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, 11 მიკრო, 2 კვარტალი, კორპუსი 31, ბინა 13",
        photo: ""
    },
    {
        id: "01752005701", real: false,
        lastName: "თურმანიძე", firstName: "ბექა", surname: "თურმანიძე",
        birth: "19.10.1980", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, 11 მიკრო, 2 კვარტალი, კორპუსი 31, ბინა 13",
        photo: ""
    },
    {
        id: "01752005702", real: false,
        lastName: "ღლონტი", firstName: "ლელა", surname: "ღლონტი",
        birth: "23.01.1952", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, 11 მიკრო, 2 კვარტალი, კორპუსი 31, ბინა 13",
        photo: ""
    },

    // >> neighbours of ბეთხოშვილი (კორპუსი 9, ბინა 4)
    {
        id: "01354003800", real: false,
        lastName: "ბეთხოშვილი", firstName: "მანანა", surname: "ბეთხოშვილი",
        birth: "14.06.1985", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 9, ბინა 4",
        photo: ""
    },
    {
        id: "01354003801", real: false,
        lastName: "ბეთხოშვილი", firstName: "შოთა", surname: "ბეთხოშვილი",
        birth: "02.03.1983", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 9, ბინა 4",
        photo: ""
    },
    {
        id: "01354003802", real: false,
        lastName: "ბეთხოშვილი", firstName: "ნიკა", surname: "ბეთხოშვილი",
        birth: "18.11.2008", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 9, ბინა 4",
        photo: ""
    },
    {
        id: "01354003803", real: false,
        lastName: "ბეთხოშვილი", firstName: "სალომე", surname: "ბეთხოშვილი",
        birth: "25.08.1957", station: "09.60", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 9, ბინა 4",
        photo: ""
    },

    // >> neighbours of ზაზაძე (ბეგლარ ახოსპირელის III ჩიხი)
    {
        id: "01317065200", real: false,
        lastName: "ზაზაძე", firstName: "თინა", surname: "ზაზაძე",
        birth: "30.04.1975", station: "04.03", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },
    {
        id: "01317065201", real: false,
        lastName: "ზაზაძე", firstName: "გრიგოლ", surname: "ზაზაძე",
        birth: "12.08.1972", station: "04.03", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },
    {
        id: "01317065202", real: false,
        lastName: "ნარიმანიძე", firstName: "ირმა", surname: "ნარიმანიძე",
        birth: "06.01.1949", station: "04.03", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    // >> neighbours of გვარამაძე (ასპინძა, სანაპიროს)
    {
        id: "05301013700", real: false,
        lastName: "გვარამაძე", firstName: "ნატო", surname: "გვარამაძე",
        birth: "19.09.1978", station: "05.12", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },
    {
        id: "05301013701", real: false,
        lastName: "გვარამაძე", firstName: "ბადრი", surname: "გვარამაძე",
        birth: "03.12.1976", station: "05.12", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },
    {
        id: "05301013702", real: false,
        lastName: "ბენქლიანი", firstName: "გრიგოლ", surname: "ბენქლიანი",
        birth: "10.06.1949", station: "05.12", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },
    {
        id: "05301013703", real: false,
        lastName: "ბენქლიანი", firstName: "დავითი", surname: "ბენქლიანი",
        birth: "26.08.2006", station: "05.12", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },
    {
        id: "05301013704", real: false,
        lastName: "გავრილოვა", firstName: "ვალენტინა", surname: "გავრილოვა",
        birth: "03.01.1947", station: "05.12", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    // >> neighbours of ხარატიშვილი (ასპინძა, რუსთაველი)
    {
        id: "05501013200", real: false,
        lastName: "ხარატიშვილი", firstName: "ნინო", surname: "ხარატიშვილი",
        birth: "27.07.1980", station: "05.14", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },
    {
        id: "05501013201", real: false,
        lastName: "ხარატიშვილი", firstName: "ლევან", surname: "ხარატიშვილი",
        birth: "11.03.1978", station: "05.14", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },
    {
        id: "05501013202", real: false,
        lastName: "ოთარაშვილი", firstName: "ეკა", surname: "ოთარაშვილი",
        birth: "16.05.1955", station: "05.14", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    // >> neighbours of კორკოტაშვილი (ფალიაშვილის)
    {
        id: "01708069400", real: false,
        lastName: "კორკოტაშვილი", firstName: "ქეთინო", surname: "კორკოტაშვილი",
        birth: "08.02.1981", station: "07.22", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ზაქარია ფალიაშვილის ქ. N 33ა ბ. 15",
        photo: ""
    },
    {
        id: "01708069401", real: false,
        lastName: "კორკოტაშვილი", firstName: "ირაკლი", surname: "კორკოტაშვილი",
        birth: "20.11.1979", station: "07.22", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ზაქარია ფალიაშვილის ქ. N 33ა ბ. 15",
        photo: ""
    },
    {
        id: "01708069402", real: false,
        lastName: "სვანიძე", firstName: "თამარ", surname: "სვანიძე",
        birth: "04.09.1963", station: "07.22", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ზაქარია ფალიაშვილის ქ. N 33ა ბ. 15",
        photo: ""
    },

    // >> neighbours of დემეტრაძე (ტაბიძის ქ.)
    {
        id: "01808066600", real: false,
        lastName: "დემეტრაძე", firstName: "ლელა", surname: "დემეტრაძე",
        birth: "13.07.1984", station: "08.05", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },
    {
        id: "01808066601", real: false,
        lastName: "დემეტრაძე", firstName: "გოჩა", surname: "დემეტრაძე",
        birth: "29.04.1982", station: "08.05", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },
    {
        id: "01808066602", real: false,
        lastName: "ახვლედიანი", firstName: "ნინო", surname: "ახვლედიანი",
        birth: "01.11.1960", station: "08.05", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },
    {
        id: "01808066603", real: false,
        lastName: "ახვლედიანი", firstName: "რევაზ", surname: "ახვლედიანი",
        birth: "17.03.1957", station: "08.05", stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

];
