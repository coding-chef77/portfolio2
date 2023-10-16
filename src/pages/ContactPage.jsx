import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styled from "styled-components";

const schema = yup.object().shape({
  from_name: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
  reply_to: yup.string().email().required(),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await send(
        "service_s3m4ejl",
        "template_e6kjwdr",
        data,
        "59cQ7_9eF9pJMj5L7"
      );
      if (response.status === 200) {
        setMessage("Takk for at du tar kontakt!");
        reset();
      } else {
        setMessage("Noe gikk galt. Vennligst prøv igjen.");
      }
    } catch (err) {
      setMessage("Noe gikk galt. Vennligst prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <StyledCard>
        <StyledCardHeader>Kontakt meg</StyledCardHeader>
        <StyledCardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              placeholder="Navn"
              {...register("from_name")}
              error={errors.subject ? "true" : undefined}
            />
            <ErrorMessage>{errors.from_name && "Navn er påkrevd"}</ErrorMessage>

            <StyledInput
              placeholder="Emne"
              {...register("subject")}
              error={errors.subject ? "true" : undefined}
            />
            <ErrorMessage>{errors.subject && "Emne er påkrevd"}</ErrorMessage>

            <StyledTextArea
              placeholder="Melding"
              {...register("message")}
              rows="4"
              error={errors.subject ? "true" : undefined}
            />
            <ErrorMessage>
              {errors.message && "Melding er påkrevd"}
            </ErrorMessage>

            <StyledInput
              placeholder="Epost-adresse"
              {...register("reply_to")}
              error={errors.subject ? "true" : undefined}
            />
            <ErrorMessage>
              {errors.reply_to && "Vennligst skriv inn en gyldig e-postadresse"}
            </ErrorMessage>

            <SubmitButton type="submit" disabled={loading}>
              <FaPaperPlane />
              {loading ? "Loading..." : "Send"}
            </SubmitButton>
            {message && (
              <Message success={message === "Takk for at du tar kontakt!"}>
                {message}
              </Message>
            )}
          </form>
        </StyledCardContent>
      </StyledCard>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: 6px auto;
  padding: 0 15px; // Add some padding for small screens
  max-width: clamp(300px, 100%, 600px);
`;

const StyledCard = styled.div`
  background-color: var(--background-color);
  border: 2px solid var(--yellow-accent);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StyledCardHeader = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  padding: 16px;
`;

const StyledCardContent = styled.div`
  padding: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: var(--secondary-text);
  color: #fff;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: var(--secondary-text);
  color: #fff;
  resize: vertical; // Allows the user to resize the textarea vertically
`;

const ErrorMessage = styled.span`
  color: red;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--verdant-green);
  color: var(--background-color);

  &:hover {
    background-color: var(--accent-teal);
    color: black;
  }
`;

const Message = styled.p`
  margin-top: 16px;
  color: ${(props) => (props.success ? "#43a047" : "red")};
`;

export default ContactPage;
