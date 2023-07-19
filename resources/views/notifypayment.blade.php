<!DOCTYPE html>
<html>

<head>
    <title>Notif Payment for Member {{ $member->business_name }}</title>
</head>

<body>
    <h3>Notif Approval of Payment for Member - <b>{{ $member->business_name }}</b></h3>
    <p>Please approve the total payment for <b>{{ $member->business_name }}</b> so they can proceed to do a payment
    </p>
    <p>Here is the link to update their total payment: <br />
        <a href="https://member.ecotourismbali.com/admin/member/detail/{{ $member->id }}" target="_blank">
            Update Member Link
        </a>
    </p>
    <p>Thank you</p>
</body>

</html>
