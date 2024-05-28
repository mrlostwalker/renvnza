const EVNTS_SHEET_ID = "1JF8JCd01dGp1s3iFiriOUHZxlMro63vCAf5Qsm7RNEE";

const url =
  "https://docs.google.com/spreadsheets/d/" +
  EVNTS_SHEET_ID +
  "/gviz/tq?tqx=out:csv&sheet=s1&tq=" +
  "select * where H > now() and L = 'Yes' order by(`H`) limit 20";

function getData(url) {
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true,
      skipEmptyLines: true,
      complete(results) {
        let d = results.data;
        d.shift();
        resolve(d);
      },
      error(error) {
        reject(error);
      },
    });
  });
}


function getImgLink(link) {
    return (
        "https://drive.google.com/thumbnail?id=" +
        link.replace("https://drive.google.com/open?id=", "")
      );
  }

 function displayData() {
  getData(url).then((eventsData) => {
    const listItems = document.querySelectorAll(".module");
    eventsData.forEach((item, index) => {


      if (listItems[index]) {
        const anchor = listItems[index].querySelector(".event-link");
        const img = listItems[index].querySelector(".event-image");

        if (anchor && img) {
          // anchor.href = `https://events.renvnza.in/event/${item[1]}`
          img.src = getImgLink(item[5]);
        }
      }
    });
  });
}

displayData();
