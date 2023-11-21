<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sales extends Model
{
    protected $table = 'sales';

    public function customer_sales(): HasMany
    {
        return $this->hasMany(CustomerSales::class, 'sales_id');
    }
}
