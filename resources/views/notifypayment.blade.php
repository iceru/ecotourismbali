<!DOCTYPE html>
<html>

<head>
    <title>Notif Payment for Member {{ $member->business_name }}</title>
</head>

<body>
    <h3>Notif Payment for Member - <b>{{ $member->business_name }}</b></h3>
    <p>Please input the total payment for <b>{{ $member->business_name }}</b> so they can proceed to do a payment
    </p>
    <p>Login to admin dashboard and input the total payment in member list: <br />
        <a href="https://member.ecotourismbali.com/admin/member/index" target="_blank">
            Member List
        </a>
    </p>
    <p>Thank you</p>
</body>

</html>
