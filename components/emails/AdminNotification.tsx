import { Html, Body, Container, Text, Heading } from "@react-email/components";

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export default function AdminNotification({
  firstName,
  lastName,
  email,
  phone,
  company,
  message,
}: Props) {
  return (
    <Html>
      <Body
        style={{
          fontFamily: "Arial",
          backgroundColor: "#f9f9f9",
          padding: "20px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "8px",
          }}
        >
          <Heading as="h2">New Contact Submission</Heading>
          <Text>
            <strong>Name:</strong> {firstName} {lastName}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Phone:</strong> {phone}
          </Text>
          <Text>
            <strong>Company:</strong> {company}
          </Text>
          <Text>
            <strong>Message:</strong>
            <br />
            {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
