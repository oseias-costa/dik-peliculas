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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.78713238407!2d-52.40463699999999!3d-26.878503399999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4c3cac7e44303%3A0x4508a85f3fd1238c!2sR.%20Rui%20Barbosa%2C%20266%20-%20Centro%2C%20Xanxer%C3%AA%20-%20SC%2C%2089820-000!5e0!3m2!1spt-BR!2sbr!4v1691613964520!5m2!1spt-BR!2sbr"
          width="400"
          height="300"
          loading="lazy"
          style={{ padding: "20px", paddingTop: "0px" }}
        ></iframe>
      </S.Container>
    </>
  );
}
