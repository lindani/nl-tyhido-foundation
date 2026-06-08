Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName WindowsBase

$sourcePath = "C:\Users\cash\Documents\Projects\Ndibs-pics-20260507T175829Z-3-001"
$targetPath = "C:\Users\cash\Documents\Projects\nl-tyhido-foundation\frontend\public\images"

if (-not (Test-Path $targetPath)) {
    New-Item -ItemType Directory -Path $targetPath | Out-Null
}

Get-ChildItem "$sourcePath\*.HEIC","$sourcePath\*.heic","$sourcePath\*.HEIF","$sourcePath\*.heif" | ForEach-Object {
    $inputFile = $_.FullName
    $outputFile = Join-Path $targetPath ([System.IO.Path]::GetFileNameWithoutExtension($inputFile) + ".png")

    try {
        $bitmapImage = New-Object Windows.Media.Imaging.BitmapImage
        $bitmapImage.BeginInit()
        $bitmapImage.UriSource = New-Object System.Uri($inputFile)
        $bitmapImage.EndInit()

        $bitmap = New-Object System.Drawing.Bitmap($bitmapImage.PixelWidth, $bitmapImage.PixelHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        $graphics.DrawImage($bitmapImage, 0, 0, $bitmapImage.PixelWidth, $bitmapImage.PixelHeight)
        $graphics.Dispose()

        $bitmap.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)
        $bitmap.Dispose()

        Write-Host "Converted $inputFile to $outputFile"
    } catch {
        Write-Host "Failed to convert $inputFile : $_"
    }
}
