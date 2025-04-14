import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Img,
  Hr,
  Row,
  Column,
} from "@react-email/components";

export default function ThankYouEmail({
  firstName,
  lastName,
  email,
  phone,
  company,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for contacting InventOG — we&apos;re reviewing your request.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section style={logoSection}>
            <Img
              src="https://via.placeholder.com/160x50?text=InventOG+Logo"
              alt="InventOG"
              width="160"
              height="50"
              style={{ margin: "0 auto" }}
            />
          </Section>

          {/* Hero */}
          <Section style={heroSection}>
            <Text style={heroTitle}>Thank You for Contacting Us</Text>
            <Text style={heroSubtitle}>
              Your message has been received, and our team is already reviewing
              it.
            </Text>
          </Section>

          {/* Divider */}
          <Hr style={divider} />

          {/* Details Section */}
          <Section style={content}>
            <Text style={text}>
              Hi{" "}
              <strong>
                {firstName} {lastName}
              </strong>
              ,
            </Text>
            <Text style={text}>
              Thank you for reaching out to <strong>InventOG</strong>. We’ve
              received your message and one of our specialists will respond
              within 24–48 hours.
            </Text>

            <Text style={textMuted}>Here’s what you submitted:</Text>
            <Text style={info}>
              <strong>Company:</strong> {company}
            </Text>
            <Text style={info}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={info}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={info}>
              <strong>Message:</strong>
              <br />
              {message}
            </Text>

            <Hr style={divider} />

            {/* Trust Section */}
            <Text style={subheading}>Why Choose InventOG?</Text>
            <ul style={list}>
              <li>
                ✅ 3+ Years of Experience in Web, App, and E-commerce
                Development
              </li>
              <li>⚡ Fast Response Times & Transparent Communication</li>
              <li>🎯 Custom Solutions Tailored for Your Business</li>
            </ul>

            <Text style={supportNote}>
              If your inquiry is urgent, please contact us directly using the
              information below.
            </Text>
          </Section>

          {/* Contact Card */}
          <Section style={contactCard}>
            <Row>
              <Column style={contactColumn}>
                <Text style={contactHeading}>📍 Office Address</Text>
                <Text style={contactDetail}>
                  Saravanampatti, Coimbatore, Tamil Nadu, Coimbatore - 641035
                </Text>
              </Column>
              <Column style={contactColumn}>
                <Text style={contactHeading}>📞 Contact Us</Text>
                <Text style={contactDetail}>contact@inventog.com</Text>
                <Text style={contactDetail}>+91 78459 31744</Text>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerNote}>
              You’re receiving this email because you contacted us through our
              website.
            </Text>
            <Text style={footerSocials}>
              🌐 www.inventog.com &nbsp; | &nbsp; 🔗 LinkedIn &nbsp; | &nbsp; 📸
              Instagram
            </Text>
            <Text style={copyright}>
              © {new Date().getFullYear()} InventOG. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ------------------------- STYLES -------------------------

const main = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontFamily: "'Segoe UI', sans-serif",
  padding: "40px 0",
};

const container = {
  width: "600px",
  backgroundColor: "#111111",
  margin: "0 auto",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
};

const logoSection = {
  backgroundColor: "#000",
  padding: "30px",
  textAlign: "center" as const,
};

const heroSection = {
  background: "linear-gradient(to right, #ffffff, #999999)",
  color: "#000",
  padding: "30px 40px",
  textAlign: "center" as const,
};

const heroTitle = {
  fontSize: "22px",
  fontWeight: "bold" as const,
  marginBottom: "10px",
};

const heroSubtitle = {
  fontSize: "15px",
  lineHeight: 1.5,
};

const divider = {
  borderTop: "1px solid #333",
  margin: "20px 0",
};

const content = {
  padding: "30px 40px",
};

const text = {
  fontSize: "15px",
  lineHeight: 1.6,
  marginBottom: "16px",
};

const textMuted = {
  fontSize: "14px",
  color: "#cccccc",
  marginBottom: "8px",
};

const subheading = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  marginTop: "20px",
  marginBottom: "10px",
};

const info = {
  fontSize: "14px",
  lineHeight: "1.4",
  marginBottom: "10px",
};

const list = {
  paddingLeft: "20px",
  marginBottom: "20px",
};

const supportNote = {
  fontSize: "14px",
  color: "#bbbbbb",
};

const contactCard = {
  backgroundColor: "#1a1a1a",
  padding: "30px 40px",
  marginTop: "20px",
  borderRadius: "10px",
};

const contactColumn = {
  padding: "10px",
};

const contactHeading = {
  fontSize: "14px",
  fontWeight: "bold" as const,
  marginBottom: "5px",
};

const contactDetail = {
  fontSize: "13px",
  color: "#ddd",
};

const footer = {
  textAlign: "center" as const,
  padding: "30px 20px",
  fontSize: "12px",
  color: "#999999",
};

const footerNote = {
  marginBottom: "10px",
};

const footerSocials = {
  marginBottom: "8px",
};

const copyright = {
  fontSize: "11px",
  color: "#666",
};
