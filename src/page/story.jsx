import { Button, Col, Container, Row } from "react-bootstrap";
import Navigasi from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Story() {
  const [tampil, setTampil] = useState(1);
  const [fullname, setFullName] = useState("");
  const isSmallScreen = window.innerWidth <= 576;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validasi = {
    fullname: { required: "Full Name is required" },
    email: { required: "E-mail is required" },
    nohp: { required: "No HP is required" },
    about: { required: "About is required" },
    judul: { required: "Tittle is required" },
    genre: { required: "Genre is required" },
    story: { required: "Cerita is required" },
  };

  function handleNext(e) {
    // console.log(e.fullname);
    setFullName(e.fullname);
    setTampil(3);
  }

  function handleKirim(a) {
    console.log(a);
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Data berhasil disimpan ",
    });
    reset();
  }

  return (
    <div className="storyfilm">
      <Navigasi />
      <div className="story  py-5">
        <Container style={{ backgroundImage: "url('/bglaptop.jpg')" }} className="container-story min-vh-100 py-2 px-3">
          <Row className="min-vh-100">
            {tampil == 1 ? (
              <>
                <Col className="col-lg-4 col-12" style={{ color: "#4f6fa0", fontFamily: "MyWebFont" }}>
                  <h1>Punya Ide Cerita Menarik Untuk Mini Series?</h1>
                  <h2>Submit your Idea!</h2>
                  <h3>(Script Idea Submission)</h3>
                </Col>
                <Col className="d-flex p-lg-4 p-3 align-items-lg-end align-items-start justify-content-end">
                  <Button style={{ backgroundColor: "#36477f" }} onClick={() => setTampil(2)}>
                    SEND YOUR STORY
                  </Button>
                </Col>
              </>
            ) : tampil == 2 ? (
              <>
                <Col className="position-relative">
                  <form>
                    <div className="col-lg-8 col-11">
                      <h4>Berikut ini kamu harus mengisi data diri kamu terlebih dahulu, harap isi dengan benar</h4>
                      <p className="mb-3">Please fill your biodata correctly</p>

                      <div className="d-flex gap-2 mb-lg-1 mb-3">
                        <TextField className="" fullWidth label="Nama lengkap | Full name*" variant="standard" id="standard-basic" color="success" {...register("fullname", validasi.fullname)} />
                        {errors.fullname && (
                          <span style={{ width: isSmallScreen ? "auto" : 200 }} className="d-flex align-items-end text-danger">
                            {errors.fullname.message}
                          </span>
                        )}
                      </div>

                      <div className="d-flex gap-2 mb-lg-1 mb-3">
                        <TextField className="" fullWidth label="Alamat Lengkap | Email Address*" variant="standard" id="standard-basic" color="success" {...register("email", validasi.email)} />
                        {errors.email && (
                          <span style={{ width: isSmallScreen ? "auto" : 200 }} className="lh-1 d-flex align-items-end text-danger">
                            {errors.email.message}
                          </span>
                        )}
                      </div>

                      <div className="d-flex gap-2 mb-lg-1 mb-3">
                        <TextField className="" fullWidth label="Nomer Handphone / Whatsapp | Phone Number(+62)*" variant="standard" id="standard-basic" color="success" {...register("nohp", validasi.nohp)} />
                        {errors.nohp && (
                          <span style={{ width: isSmallScreen ? "auto" : 200 }} className="lh-1 d-flex align-items-end text-danger">
                            {errors.nohp.message}
                          </span>
                        )}
                      </div>

                      <TextField
                        fullWidth
                        id="standard-multiline-flexible"
                        label="Ceritakan tentang diri kamu | Tell us a little about yourself (200 words
                        max)*"
                        multiline
                        rows="5"
                        variant="standard"
                        color="success"
                        {...register("about", validasi.about)}
                      />
                      {errors.about && <p className="text-danger">{errors.about.message}</p>}
                    </div>

                    <div className="mt-lg-5 mt-3 text-end pe-lg-5 pe-2">
                      <Button className="btn-next" type="button" style={{ backgroundColor: "#36477f" }} onClick={handleSubmit(handleNext)}>
                        NEXT&nbsp;&rarr;
                      </Button>
                    </div>
                  </form>
                </Col>
              </>
            ) : (
              <>
                <Col className="position-relative">
                  <form>
                    <div className="col-lg-7 col-12">
                      <h1 className="mb-2">{fullname}</h1>

                      <TextField className="mb-1" fullWidth label="Judul | Tittle*" variant="standard" id="standard-basic" color="success" {...register("judul", validasi.judul)} />
                      {errors.judul && <span className="text-danger">{errors.judul.message}</span>}

                      <TextField className="mb-1" fullWidth label="Genre | Genre*" variant="standard" id="standard-basic" color="success" {...register("genre", validasi.genre)} />
                      {errors.genre && <p className="text-danger">{errors.genre.message}</p>}

                      <TextField fullWidth id="standard-multiline-flexible" label="Tell us your story (600 words or less)*" multiline rows="7" variant="standard" color="success" {...register("story", validasi.story)} />
                      {errors.story && <p className="text-danger">{errors.story.message}</p>}
                    </div>
                    <div className="mt-lg-5 mt-3">
                      <Button className="btn-next" type="button" style={{ backgroundColor: "#36477f" }} onClick={handleSubmit(handleKirim)}>
                        SUBMIT YOUR STORY
                      </Button>
                    </div>
                  </form>
                </Col>
              </>
            )}
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
}
