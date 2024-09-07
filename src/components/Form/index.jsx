const Form = ({ adduser }) => {
  const handlesubmit = (e) => {
    e.preventDefault();
    // formdaki inputlardaki değerlerden obje oluştur.

    const formdata = new FormData(e.target);

    const newuser = Object.fromEntries(formdata.entries());

    // Kullanıcıyı taboya ekle..

    adduser(newuser);

    e.target.reset();
  };

  return (
    // onsubmit olayı formdakı elemanları izleme olayıdır.
    <form onSubmit={handlesubmit}>
      <div className="container">
        <div>
          <label htmlFor="name">isim</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="ör:Bülent"
            className="form-control my-3"
          />

          <label htmlFor="mail">Mail</label>
          <input
            id="mail"
            type="email"
            name="mail"
            placeholder="ör:gokhangala@gmail.com"
            className="form-control my-3"
          />

          <label htmlFor="age">Yaş : </label>
          <input
            id="age"
            type="number"
            name="age"
            placeholder="ör:26"
            className="form-control my-3"
          />
          <div className="my-4 justify-content-center d-flex ">
            <button className="btn btn-primary my-4">Kullanıcı Ekle</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
