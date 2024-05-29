<?php

namespace App\Imports;

use Illuminate\Support\Str;
use App\Models\MemberTourism;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class MembersImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
       // Trim the values to ensure we catch empty strings with whitespace
       $email = trim($row['email'] ?? '');
       $phone = trim($row['phone'] ?? '');
       $business_name = trim($row['business_name'] ?? '');

       // Check if email, phone, or business name is null or empty
       if (empty($email) || empty($phone) || empty($business_name)) {
           return null;
       }

       if (MemberTourism::where('business_name', $business_name)->exists()) {
        return null;
    }

       return new MemberTourism([
           'email' => $email,
           'phone' => $phone,
           'business_name' => $business_name,
           'category' => $row['category'],
           'name' => $row['name'],
           'member_only' => $row['member_only'],
           'slug' => Str::slug($business_name),
           'source_id' => $row['source'],
       ]);
    }
}
