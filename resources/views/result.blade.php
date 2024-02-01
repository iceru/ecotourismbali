<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        .wrapper {
            padding: 16px;
            font-size: 16px;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
        }

        .header {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 24px;
            justify-content: space-between;
        }

        .logoWrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .date {
            font-size: 14px;
        }

        .logo {
            width: 60px;
            height: 60px;
        }

        .textHeader {
            margin-left: 12px;
        }

        .text1 {
            font-size: 14px;
            font-weight: 700;
            color: #1F656C;
            margin-bottom: 2px;
        }

        .textInfo {
            font-size: 12px;
        }

        .info {
            font-size: 14px;
            padding: 16px;
            border-radius: 16px;
            color: #1F656C;
            margin-bottom: 16px;
            background-color: #D2E0E2;
        }

        .climate {
            margin-bottom: 16px;
            font-size: 14px;
        }

        .business {
            text-align: center;
            font-weight: 700;
            margin-bottom: 16px;
            font-size: 24px;
            padding-bottom: 16px;
            border-bottom: 1px solid lightgray;
        }

        .results {
            display: flex;
            flex-direction: row;
            justify-content: center;
            text-align: center;
            margin-bottom: 32px;
        }

        .scoreWrapper {
            margin-right: 0;
            padding-right: 32px;
            border-right: 1px solid lightgray;
        }

        .badges {
            margin-left: 0;
            padding-left: 32px;
        }

        .score {
            font-size: 48px;
            color: #1F656C;
            font-weight: 700;
        }

        .resultText {
            font-weight: 600;
            font-size: 14px;
        }

        .badgeWrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 8px;
        }

        .badgeName {
            font-weight: 700;
            font-size: 20px;
        }

        .badgeText {
            font-size: 14px;
        }

        .badgeImage {
            height: 60px;
            width: auto;
            margin-right: 10px;
        }

        .scoreList {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 16px;
        }

        .scoreItem {
            width: 45%;
        }

        .titleLogo {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .scoreLogo {
            margin-right: 6px;
            width: 30px;
            height: 30px;
            object-fit: contain;
        }

        .scoreTitle {
            font-size: 10px;
            font-weight: 500;
        }

        .scoreListTitle {
            margin-bottom: 16px;
        }

        .scoreText {
            font-size: 14px;
            margin-top: 4px;
        }

        .scoreNum {
            font-weight: 700;
            color: #1F656C;
        }

        .scoreImage {
            width: 100%;
            height: auto;
            margin-bottom: 4px;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="header">
            <div class="logoWrapper">
                <img src="https://ecotourismbali.com/wp-content/uploads/2022/09/LOGO-1.png" class="logo"></img>
                <div class="textHeader">
                    <p class="text1">Self Assessment</p>
                    <p>Eco Tourism Bali</p>
                </div>
            </div>
            <div>
                <p class="date">
                    {{ date('l, jS F Y', strtotime($session->created_at)) }}
                </p>
            </div>
        </div>
        <div class="info">
            <p class="textInfo">Self-assessment is an independent assessment valid for restaurants and accommodation
                businesses in Bali for a year. Members can do two self-assessments and will get a score from the results
                of the self-assessment.</p>
        </div>
        <p class="climate">
            Members who have completed the self-assessment on the Eco Tourism
            Bali platform are eligible to apply for the Climate Friendly Travel
            Commitment. Please click this link:
            <a href="https://climatefriendly.travel/resources/Registration/index.php">
                https://climatefriendly.travel/resources/Registration/index.php
            </a>
        </p>
        <div>
            <p class="business">{{ $member->business_name }}</p>
        </div>
        <div class="results">
            <div class="scoreWrapper">
                <p class="resultText">Total Score:</p>
                <p class="score">{{ $session->total_score }}</p>
            </div>
            <div class="badges">
                <p class="resultText">Badge Result:</p>
                <div class="badgeWrapper">
                    <img src="{{ asset('storage/badges/') . $member->badge->image }}"class="badgeImage"></img>
                    <div>
                        <p class="badgeName">{{ $member->badge->name }}</p>
                        <p class="badgeText">Badge</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="scoreListTitle">
            <p>Component's Score</p>
        </div>
        <div class="scoreList">
            @foreach ($scores as $score)
                <div class="scoreItem">
                    <div class="titleLogo">
                        <img src="{{ asset('storage/assessments/') . $score->assessment->logo }}"
                            class="scoreLogo"></img>
                        <p class="scoreTitle">
                            {{ $score->assessment->title_en }}
                        </p>
                    </div>
                    <div class="scoreText">
                        Score:
                        <p class="scoreNum"> {{ $score->score }} Points</p>
                    </div>
                </div>
            @endforeach

        </div>
    </div>
</body>

</html>
