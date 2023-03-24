<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessModule extends Model
{
    use HasFactory;

    protected $fillable = [
        'qr_code','car_plate','date','VAT_number','length','business_id','confirmed','driver_full_name'
    ];
}
