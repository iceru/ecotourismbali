<!DOCTYPE html>
<html>

<head>
    <title>Verification Badge Request - Member {{ $member->business_name }}</title>
</head>

<body>
    <h3>Verification Badge Request - <b>{{ $member->business_name }}</b></h3>
    <p><b>{{ $member->business_name }}</b> sent a request to verify their badge
    </p>
    <p>You can contact them directly by their email at <b>{{ $member->user->email }}</b> or their phone at
        <b>{{ $member->phone }}</b>
    </p>
    <p>Thank you</p>
</body>

</html>
