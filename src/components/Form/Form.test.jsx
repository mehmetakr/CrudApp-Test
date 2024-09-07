import { render, screen } from "@testing-library/react";
import Form from ".";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

test("formu gönderince adduser propu dogru parametrelerle çalısıyormu", async () => {
  //fonksiyon mock'lama (taklit fonksiyonu olusturma)
  // kac kez cagrıldı  | hangi parametrelerle cagrıldı .
  // tarzında testleri yapmamızı sağlayan orjinal fonksiyonu taklit eden yapı

  // mockFn (Orijinal fonksiyonları Taklit etme fonksiyonu  )
  const mockFn = vi.fn();

  // user kurulumu yap
  const user = userEvent.setup();

  // bileşeni ekrana bas
  render(<Form adduser={mockFn} />);

  // Gerekli elemanlara ulasalım

  const nameInp = screen.getByRole("textbox", { name: "isim" });
  const mailInp = screen.getByRole("textbox", { name: "Mail" });
  const ageInp = screen.getByPlaceholderText("ör:26");

  const sendbtn = screen.getByRole("button");

  // inputları doldur

  // yol -1> isimm inputunu doldur.

  await user.click(nameInp);
  await user.keyboard("hülya");

  // yol2  await user.type(nameInp,"şeyma");

  // yol 2=> inputu doldur..

  // bu tipte 2 parametre giriyoruz 1. hangi parametreyi giricegimiz 2. ise hangi değeri giriceğimizdir.
  await user.type(mailInp, "mehmet1224@gmail.com");

  // yaş inputunu doldur
  await user.type(ageInp, "43");

  // gönder butonuna tıkla

  await user.click(sendbtn);

  // adduser  dogru parametreler ile çalıştı mı

  expect(mockFn).toHaveBeenCalledWith({
    name: "hülya",
    mail: "mehmet1224@gmail.com",
    age: "43",
  });

  // inputlar temizlendi mi ?

  expect(mailInp.value).toBe("");
  expect(nameInp.value).toBe("");
  expect(ageInp.value).toBe("");
});
