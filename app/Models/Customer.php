<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    protected $table = 'customers';

    public function customer_sales(): HasMany
    {
        return $this->hasMany(CustomerSales::class, 'customer_id');
    }

    public function customer_room(): HasMany
    {
        return $this->hasMany(CustomerRoom::class, 'customer_id');
    }
}
