import { render, within } from "@testing-library/react";
import { expect, it, test } from "vitest";
import List from ".";
import { screen } from "@testing-library/react";
const dize = [
  {
    name: "Mehmet",
    mail: "mehmet22@gmail.com",
    age: 45,
  },
  {
    name: "Hazal",
    mail: "hazalDz@gmail.com",
    age: 34,
  },
  {
    name: "Kemal",
    mail: "kemal242@gmail.com",
    age: 23,
  },
  {
    name: "gamze",
    mail: "gamzeesen@gmail.com",
    age: 25,
  },
];

//Gönderilen herbir kullanıcı için ekrana satır  basılır.

it("Gönderilen herbir kullanıcı için ekrana satır basılıyormu ? ", () => {
  render(<List users={dize} />);

  const body = screen.getByTestId("table-body");
  // Dizideki kullanıcı sayısı kadar tablo satırı var mı ?
  //   ( satır sayısı users dizisindeki eleman sayısına eşit mi kontrolü..)
  // Belirli bir kapsayıcı içerisindeki elamanlar seçmek için within() kullanılır..
  const rows = within(body).getAllByRole("row");

  // satır sayısı users dizisindeki eleman sayısına eşit mi kontrol

  expect(rows).toHaveLength(dize.length);

  // Her bir kullanıcı için isim, email ,yaş hücreleri geliyormu.
});

// Dizideki Herbir kullanıcı için ekrana kullanıcının değerlerini içeren tablo hücresi basılıyor mu ?


it("Her bir kullanıcı için email yaş hücreleri bulunur.", () => { 



  render(<List users={dize}/>);

  //  ELemanları For içinde kullanmak için  Dize deki herbir değeri user adındakı değişkene atıcaz ve o sekilde kullanıcaz
for (const user of dize) {
  // kullanıcının ismini içeren mail tab lo hücreleri

  screen.getByRole("cell", { name: user.name });

  // kullanıcının mailini içeren tablo hücreleri

  screen.getByRole("cell", { name: user.mail });

  // kullanıcının yaşını  içeren tablo hücresini

  screen.getByRole("cell", { name: user.age });
}

})

