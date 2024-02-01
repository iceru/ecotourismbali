<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;

class ResultMail extends Mailable
{
    use Queueable, SerializesModels;
    public $member;
    public $scores;
    public $session;

    /**
     * Create a new message instance.
     */
    public function __construct($member, $scores, $session)
    {
        $this->member = $member;
        $this->scores = $scores;
        $this->session = $session;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('info@ecotourismbali.com', 'Info Eco Tourism Bali'),
            subject: 'Result Asssessment for '.$this->member->business_name,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'result',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
