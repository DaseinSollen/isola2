<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QRcode extends Model
{
    use HasFactory;

    protected $table = 'qr_codes';
    protected $fillable = [
        'user_id','user','car_plate','qr_code'
    ];
}
