<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $table = 'products';

    public function customer_sales(): HasMany
    {
        return $this->hasMany(CustomerSales::class, 'product_id');
    }
}
