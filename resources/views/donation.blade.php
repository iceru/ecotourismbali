<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <p>
        Dear {{ $donation->name }}, <br />
        On behalf of Eco Tourism Bali, I extend our heartfelt gratitude for your generous donation of
        Rp{{ number_format($donation->amount, 0, ',', '.') }}
        in support of our Mangrove Planting initiative. Your contribution plays a vital role in preserving Bali’s
        natural environment and fostering a
        sustainable future.<br /> <br />
        We are pleased to inform you that your donation will be utilized during the Regenerative Bali Program 2025, a
        transformative initiative focused on ecological restoration, biodiversity conservation, and community
        empowerment. This program is designed to create lasting positive impacts on Bali’s environment and the
        livelihoods of its local communities. <br /> <br />
        For your convenience, the detailed timeline of the Regenerative Bali Program 2025 is available on our Event
        Calendar. We encourage you to follow along and witness the transformative journey of your support as it brings
        tangible benefits to Bali’s unique ecosystems. <br /> <br />
        Thank you once again for partnering with us in this impactful mission. Should you have any questions or require
        further information, please do not hesitate to contact us at info@ecotourismbali.com.<br /><br />
        Best Regards,<br />
        Eco Tourism Bali
    </p>
</body>

</html>
