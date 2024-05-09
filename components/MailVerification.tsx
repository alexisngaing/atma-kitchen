import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface MailVerificationProps {
  validationLink?: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const MailVerification = ({ validationLink }: MailVerificationProps) => (
  <Html>
    <Head />
    <Preview>Confirm your email address</Preview>
    <Body style={main}>
      <Container style={container}>
        <h1 className="pt-10 text-center text-5xl font-bold text-[#41B06E]">ATMA KITCHEN</h1>
        <Heading style={h1}>Konfirmasi alamat email Anda</Heading>
        <Text style={heroText}>
          Klik link di bawah ini untuk mengonfirmasi alamat email Anda dan menyelesaikan proses
          registrasi.
        </Text>

        <Section style={codeBox}>
          <Text style={confirmationLinkText}>--Link Here-- {validationLink} --Link Here--</Text>
        </Section>

        <Text style={text}>
          Jika Anda tidak meminta verifikasi email ini, Anda dapat mengabaikan pesan ini.
        </Text>

        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: "66%" }}>
              <h3 className="font-semibold text-[#41B06E]">Atma Kitchen</h3>
            </Column>
            <Column>
              <Section></Section>
            </Column>
          </Row>
        </Section>

        <Section>
          <Link style={footerLink} href="#" target="_blank" rel="noopener noreferrer">
            Blog
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link style={footerLink} href="#" target="_blank" rel="noopener noreferrer">
            Ketentuan
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link style={footerLink} href="#" target="_blank" rel="noopener noreferrer">
            Bantuan
          </Link>
          <Text style={footerText}>
            ©2024 Atma Kitchen. <br />
            Jl. Babarsari No.44, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa
            Yogyakarta 55281 <br />
            <br />
            Hak Cipta Dilindungi Undang-Undang.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

MailVerification.PreviewProps = {
  validationLink: "https://youtu.be/dQw4w9WgXcQ?si=CRrhS1FMQZYgC5lR",
} as MailVerificationProps;

export default MailVerification;

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
};

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
};

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginBottom: "30px",
  padding: "40px 10px",
};

const confirmationLinkText = {
  fontSize: "16px",
  textAlign: "center" as const,
  verticalAlign: "middle",
};

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
};
