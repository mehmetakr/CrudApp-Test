// Testleri bu dosyada oluşturucaz ve yazıcaz.

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, test } from "vitest";
import App from "./App";
import { screen } from "@testing-library/react";
const multiple = (a, r, g) => {
  return a * r * g;
};

// Bir bileşen veya method ile alakalı birden fazla bu testler gruplandırmak için describe kullanırız .

// test() === it() aynı anlama gelir..

describe("Fonksiyon testleri ", () => {
  test("bir test olusturucaz (fonksiyon dogru calısıyomu)", () => {
    expect(multiple(10, 4, 6)).toBe(240);
  });

  it("Sonuc eksili cıkıyormu", () => {
    expect(multiple(5, 3, -6)).toBe(-90);
  });

  it("Sonuc sıfır cıkıyormu testi gerçekleştiricez...", () => {
    expect(multiple(5234, 62, 0)).toBe(0);
  });

  test("Sonuc 100 mü tessti gerçekleştiricez.", () => {
    expect(multiple(4, 5, 5)).toBe(100);
  });
});

it("Uygulama dogru şekilde çalışıyormmu", async () => {
  // Setup yapısı : testlerde klavye, fare ve diğer kullanıcı eylemlerini daha doğru bir şekilde taklit etmek için kullanılır.
  const user = userEvent.setup();

  render(<App />);

  // gerekli elemanları çağır

  const namei = screen.getByRole("textbox", { name: "isim" });
  const maili = screen.getByRole("textbox", { name: "Mail" });
  const agei = screen.getByPlaceholderText("ör:26");

  const gönderbtn = screen.getByRole("button", { name: "Kullanıcı Ekle" });

  // inputları doldur
  await user.type(namei, "Kenan");
  await user.type(agei, "34");
  await user.type(maili, "hkena52@gmail.com");

  // kullanıcı ekle butonuna tıkla
  await user.click(gönderbtn);

  // inputlara girilen verilere uygun tablo hücreleri olustu mu

  screen.getByRole("cell", { name: "Kenan" });

  screen.getByRole("cell", { name: "hkena52@gmail.com" });

  screen.getByRole("cell", { name: "34" });
});
