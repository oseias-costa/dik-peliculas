"use client";
import { contactData } from "./contact-data";
import * as S from "./contact.styles";

export default function Contact() {
  return (
    <>
      <S.Container id="contato">
        <S.Contacts>
          <h2>{contactData.title}</h2>
          <S.ContactItem>
            <S.Icon
              src={contactData.adress.icon}
              alt="Endereço Dik Películas Jaguaruna SC"
            />
            <div>
              <h4 className="Contact__Title">Endereço</h4>
              <p className="Contact__Content">{contactData.adress.content}</p>
            </div>
          </S.ContactItem>
          <S.ContactItem>
            <S.Icon
              src={contactData.phone.icon}
              alt="Endereço Clínica de Odontológica Oral Brasil Xanxerê/SC"
            />
            <div>
              <h4 className="Contact__Title">Telefone</h4>
              <p className="Contact__Content-phone">
                {contactData.phone.content}
              </p>
            </div>
          </S.ContactItem>
        </S.Contacts>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.229322643767!2d-49.0225892!3d-28.6280438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95215f276555eb03%3A0xff5f405f67a4ec!2sDik%20Peliculas%20Cortinas%20e%20Persianas%20Jaguaruna!5e0!3m2!1spt-BR!2sbr!4v1698696049613!5m2!1spt-BR!2sbr"
          width="400"
          height="300"
          loading="lazy"
          style={{ padding: "20px", paddingTop: "0px" }}
        ></iframe>
      </S.Container>
    </>
  );
}
