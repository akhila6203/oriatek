<?php

declare(strict_types=1);

/* =========================================================
   DEVELOPMENT ERROR SETTINGS

   Live hosting lo:
   ini_set('display_errors', '0');
========================================================= */

error_reporting(E_ALL);
ini_set('display_errors', '1');

/* =========================================================
   ALLOW ONLY POST REQUEST
========================================================= */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Invalid request method.';
    exit;
}

/* =========================================================
   CLEAN INPUT
========================================================= */

function clean_input(string $value): string
{
    return trim(strip_tags($value));
}

/* =========================================================
   RECEIVE FORM VALUES
========================================================= */

$fullName = clean_input(
    $_POST['full_name'] ?? ''
);

$company = clean_input(
    $_POST['company'] ?? ''
);

$email = filter_var(
    trim($_POST['email'] ?? ''),
    FILTER_SANITIZE_EMAIL
);

$phone = clean_input(
    $_POST['phone'] ?? ''
);

$service = clean_input(
    $_POST['service'] ?? ''
);

$formSubject = clean_input(
    $_POST['subject'] ?? ''
);

$projectMessage = clean_input(
    $_POST['message'] ?? ''
);

$consent = clean_input(
    $_POST['consent'] ?? ''
);

/* =========================================================
   SERVER-SIDE VALIDATION
========================================================= */

if (
    $fullName === '' ||
    $company === '' ||
    $email === '' ||
    $phone === '' ||
    $service === '' ||
    $formSubject === '' ||
    $projectMessage === '' ||
    $consent !== 'accepted'
) {
    http_response_code(422);
    echo 'Please complete all required fields.';
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo 'Please enter a valid email address.';
    exit;
}

if (mb_strlen($fullName) < 2) {
    http_response_code(422);
    echo 'Please enter a valid full name.';
    exit;
}

if (mb_strlen($company) < 2) {
    http_response_code(422);
    echo 'Please enter a valid company name.';
    exit;
}

if (mb_strlen($formSubject) < 4) {
    http_response_code(422);
    echo 'Please enter a valid subject.';
    exit;
}

if (mb_strlen($projectMessage) < 20) {
    http_response_code(422);
    echo 'Project requirement must contain at least 20 characters.';
    exit;
}

$phoneWithoutSpaces = preg_replace(
    '/[\s\-\(\)]/',
    '',
    $phone
);

if (
    $phoneWithoutSpaces === null ||
    !preg_match('/^\+?[0-9]{8,15}$/', $phoneWithoutSpaces)
) {
    http_response_code(422);
    echo 'Please enter a valid phone number.';
    exit;
}

/* =========================================================
   EMAIL DETAILS
========================================================= */

$to = 'kummariakhila025@gmail.com';

$emailSubject =
    'New Oriatek Technology Enquiry - ' . $formSubject;

/* =========================================================
   EMAIL MESSAGE
========================================================= */

$message = "
NEW ORIATEK TECHNOLOGY ENQUIRY
========================================

Full Name:
{$fullName}

Company:
{$company}

Email:
{$email}

Phone:
{$phone}

Required Service:
{$service}

Subject:
{$formSubject}

Project Requirement:
{$projectMessage}

Consent:
Accepted

========================================

Submitted From:
Oriatek Technology Website Contact Form
";

/* =========================================================
   EMAIL HEADERS
========================================================= */

$headers = "MIME-Version: 1.0\r\n";

$headers .=
    "Content-Type: text/plain; charset=UTF-8\r\n";

$headers .=
    "From: Oriatek Technology <noreply@oriatek.com>\r\n";

$headers .=
    "Reply-To: {$email}\r\n";

$headers .=
    "X-Mailer: PHP/" . phpversion();

/* =========================================================
   SEND EMAIL
========================================================= */

$mailSent = mail(
    $to,
    $emailSubject,
    $message,
    $headers
);

if ($mailSent) {
    echo 'success';
    exit;
}

http_response_code(500);

echo 'Mail sending failed. Please contact us directly by email.';